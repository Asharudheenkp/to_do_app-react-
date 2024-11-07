import AddTask from "./components/AddTask"
import CompletedTasks from "./components/CompletedTasks"
import Footer from "./components/Footer";
import PendingTasks from "./components/PendingTasks"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
function App() {

  return (
    <div className="w-100 w-[95%] md:w-[80%]  mx-auto  mt-10">
      <Header/>
      <AddTask/>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <PendingTasks/>
        <CompletedTasks/>
        <ToastContainer />
      </div>
      <Footer/>
    </div>
  )
}

export default App
