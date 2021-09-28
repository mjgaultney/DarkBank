const user_data = JSON.parse(localStorage.getItem("user_data"));

function AllData(){

    const [data, setData] = React.useState('');    

    React.useEffect(() => {
        
        // fetch all accounts from API
        fetch('/account/all', {
            headers: {
                "Content-type": 'application/json',
                Authorization: `Bearer ${user_data.token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);                
            });

    }, []);

    return (
    <Card
        bgcolor="secondary"
        header="DarkBank Users"
        status={status}
        body={data}
          />
    )
    }