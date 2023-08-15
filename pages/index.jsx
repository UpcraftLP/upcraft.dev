import Head from 'next/head'
import { Hero } from '../components/index/hero'

export default () => (
    <main>
        <Head>
            <title>Upcraft | Home</title>
        </Head>
        <div className="flex items-center justify-center w-full h-screen">
            <Hero />
        </div>
    </main>
)
