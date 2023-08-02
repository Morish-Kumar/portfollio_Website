import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Servicepage/Service";



function App() {



  return (
    <>
      <Navbar />
      <MainPage />
      {/* <div>
        <Service logoSrc="https://fonts.gstatic.com/s/i/materialicons/lightbulb/v11/24px.svg" title="UI UX developer" paragraph="Expert in designing the UI UX of the website." />
        <Service logoSrc="https://fonts.gstatic.com/s/i/materialicons/lightbulb/v11/24px.svg" title="Frontend Developer" paragraph="Expert in designing the frontend/overview of the website." />
        <Service logoSrc="https://fonts.gstatic.com/s/i/materialicons/lightbulb/v11/24px.svg" title="BackendDeveloper" paragraph="Expert in working with the backend of the website." />
      </div> */}
      <Service/>
    </>
  );
}

export default App;
