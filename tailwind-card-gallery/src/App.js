import './App.css';
import Card from './Card';

function App() {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-wrap justify-center items-center p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      <Card
          title="Beautiful Sunset"
          image="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRCCmoea4cozesPkjXuFdOi7uT9qmavnWUnUZ8kqREklhYtJcn7-mCnJwX7BZuS5UP6"
          description="A beautiful sunset over the mountains."
        />
        <Card
          title="Forest Walk"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkej3dLtTKTdmjm2O2mpUQ_lLdWS9JADpOWg&s"
          description="A serene walk through a lush forest."
        />
        <Card
          title="City Lights"
          image="https://images.theconversation.com/files/149162/original/image-20161208-18046-116xg09.jpg?ixlib=rb-4.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
          description="The city comes alive with lights at night."
        />
      </div>
    </div>
  );
}

export default App;
