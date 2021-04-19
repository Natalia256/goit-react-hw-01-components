import './App.css';
import user from "./components/Profile/user.json";
import Profile from "./components/Profile/Profile";
import statisticalData from "./components/Statistics/statistical-data.json";
import Statistics from "./components/Statistics/Statistics";
import friends from "./components/FriendList/friends.json";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./components/TransactionHistory/transactions.json";




function statSum(statisticalData) {
  statisticalData = Object.values(
    statisticalData.reduce((acc, item) => {
      (
        acc[item.label] ||
        (acc[item.label] = { label: item.label, percentage: 0 })
      ).percentage += item.percentage;
      return acc;
    }, {})
  );
  return statisticalData;
}

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statSum(statisticalData)} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
