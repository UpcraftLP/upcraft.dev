import Head from 'next/head'
import { Hero } from '../components/index/hero'

export default () => (
    <main>
        <Head>
            <title>Upcraft | Home</title>
        </Head>
        <div className="w-full h-screen flex items-center justify-center">
            <Hero />
        </div>
    </main>
)
