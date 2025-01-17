import Head from 'next/head';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import { Article } from '../components/Article';
import Services from '../components/Services';
import { Footer } from '../components/Footer';
export default function Home() {
	return (
		<div>
			<Head>
				<title>Big Bison Logistics</title>
				<meta name="Big Bison Logistics" content="Big Bison Logistics" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Main />
			<About />
			<Article />
			<Services />
			<Footer />
		</div>
	)
}
