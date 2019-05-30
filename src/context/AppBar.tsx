import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import UIAppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

/**
 * This file is inspired by the way react native app bar works
 */

interface IProviderProps extends RouteComponentProps {
  children: React.ReactNode;
}

interface IAppBarProps {
  title?: string;
  showGoBack?: boolean;
  rightButton?: {
    action: () => void;
    text: string;
  };
}

interface IContext {
  setConsumer: (props: IAppBarProps) => void;
  removeConsumer: () => void;
  setProps: (props: IAppBarProps) => void;
}

const Context = React.createContext<IContext>({
  removeConsumer: () => undefined,
  setConsumer: () => undefined,
  setProps: () => undefined,
});

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

/**
 * The app bar provider, updates the props for the app bar and decides when to show it
 */
const AppBar: React.FC<IProviderProps> = ({ children, history }: IProviderProps) => {
  const classes = useStyles();
  const [shouldShow, setShouldShow] = React.useState(false);
  const [props, setProps] = React.useState<IAppBarProps>({});

  const context: IContext = {
    removeConsumer: () => {
      setShouldShow(false);
      setProps({});
    },
    setConsumer: (nextProps) => {
      setShouldShow((prevState) => {
        // eslint-disable-next-line
        if (prevState) console.error("Mounting multiple AppBars, don't do this!");

        return true;
      });

      setProps(nextProps);
    },
    setProps: (nextProps) => {
      setProps(nextProps);
    },
  };

  const { showGoBack, title, rightButton } = props;

  return (
    <Context.Provider value={context}>
      {shouldShow && (
        <div className={classes.root}>
          <UIAppBar position="static">
            <Toolbar>
              {!!showGoBack && (
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                  onClick={history.goBack}
                >
                  <KeyboardArrowLeft />
                </IconButton>
              )}
              {!!title && (
                <Typography variant="h6" className={classes.title}>
                  {title}
                </Typography>
              )}
              {!!rightButton && (
                <Button color="inherit" onClick={rightButton.action}>
                  {rightButton.text}
                </Button>
              )}
            </Toolbar>
          </UIAppBar>
        </div>
      )}
      {children}
    </Context.Provider>
  );
};

export const Provider = withRouter(AppBar);

interface IConProps extends IContext {
  appBarProps: IAppBarProps;
}

/**
 * Consumer that signals the props back to the provider so it can render the app bar
 */
class ConsumerProps extends React.Component<IConProps> {
  /**
   * When the component mounts, pass it's props up to the provider and register the app bar
   */
  public componentDidMount() {
    const { setConsumer, appBarProps } = this.props;

    setConsumer(appBarProps);
  }

  /**
   * When we get new props let the provider know and update
   */
  public componentWillReceiveProps({ appBarProps }: IConProps) {
    const { setProps } = this.props;

    setProps(appBarProps);
  }

  /**
   * Never update, the provider renders the app bar, not us
   */
  public shouldComponentUpdate() {
    return false;
  }

  /**
   * When the component unmounts, unregister this app bar
   */
  public componentWillUnmount() {
    const { removeConsumer } = this.props;

    removeConsumer();
  }

  /**
   * Don't render anything
   */
  public render() {
    return null;
  }
}

/**
 * Export the consumer
 */
export const Consumer = (props: IAppBarProps) => (
  <Context.Consumer>
    {context => <ConsumerProps {...context} appBarProps={props} />}
  </Context.Consumer>
);
