import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Header />

      <StudentCard
        name="Kiran"
        course="BCA"
        marks="76%"
      />

      <StudentCard
        name="Hema"
        course="BCA"
        marks="82%"
      />

      <Counter />
    </div>
  );
}

export default App;