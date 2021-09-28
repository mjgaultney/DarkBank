
import Card from "./context";

function Home(){
  return (
    <Card
      txtcolor="black"
      header="DarkBank Main Lobby"
      title="Welcome to the DarkBank"
      text="Please create a Dark account and enjoy our services."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}

export default Home