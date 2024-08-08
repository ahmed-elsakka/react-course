
import './App.css';
import ProfileCard from './ProfileCard';
function App() {
  const handleClick = () => {
    console.log("Button was clicked");
  };

  return (
    <div className="App">
      <ProfileCard
        name="John Doe"
        bio="A passionate developer who loves coding and coffee."
        imageUrl="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxwcm9maWxlfGVufDB8fHx8MTY5MTU1MzI3Ng&ixlib=rb-1.2.1&q=80&w=400"
      />
    </div>
  );
}

export default App;
