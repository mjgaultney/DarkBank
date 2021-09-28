const useState = React.useState;
const user_data = JSON.parse(localStorage.getItem("user_data"));
const Redirect = ReactRouterDOM.Redirect;

const Spa = () => {
  const [successAlert, setSuccessAlert] = useState(false);
  const [alertData, setAlertData] = useState("");

  const handleAlert = (data) => {
    setSuccessAlert(true);
    setAlertData(data);
  };

  return (
    <HashRouter>
      <div>
        <NavBar />
        <UserContext.Provider
          value={{
            users: [
              {
                name: "abel",
                email: "abel@mit.edu",
                password: "secret",
                balance: 100,
              },
            ],
          }}
        >
          {user_data && user_data.token ? <AlertBar alertData={alertData} /> : null}
          <div className="container" style={{ padding: "20px" }}>
            <Route path="/" exact component={Home} />
            <Route exact path="/CreateAccount/" component={CreateAccount} />
            <Route
              path="/login/"
              render={(props) => <Login {...props} handleAlert={handleAlert} />}
            />
            <Route path="/deposit/" render={(props) => {
              if(user_data && user_data.token){
                return <Deposit {...props} /> 
              } return <Redirect to="/login" />
            }} />

<Route
              
              path="/alldata/"
              render={(props) => {
                if (user_data && user_data.token) {
                  return <AllData {...props} />;
                }
                return <Redirect to="/login" />;
              }}
            />

            {/* only if there is a token, render the withraw component. Else, redirect to login */}
            <Route
              exact
              path="/withdraw/"
              render={(props) => {
                if (user_data && user_data.token) {
                  return <Withdraw {...props} />;
                }
                return <Redirect to="/login" />;
              }}
            />
            {/* <Route path="/transactions/" component={Transactions} /> */}
            <Route
              path="/balance/"
              render={(props) => {
                if (user_data && user_data.token) {
                  return <Balance {...props} />;
                }
                return <Redirect to="/login" />;
              }}
            />
            
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
};

ReactDOM.render(<Spa />, document.getElementById("root"));
