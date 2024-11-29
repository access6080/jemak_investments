import  Header from "./components/Header"
import  Banner  from "./components/Banner"
import  Vision  from "./components/Vision"
import  Services  from "./components/Services"
import  InfoCarousel  from "./components/InfoCarousel"
import  About  from "./components/About"
import  Footer from "./components/Footer"

function App() {
  return (
    <div>
			<Header />
			<main>
				<Banner />
				<Vision />
				<Services />
				<InfoCarousel />
				<About />
			</main>
			<Footer />
		</div>
  )
}

export default App
