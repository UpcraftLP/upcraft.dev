import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {

        const keywords = [
            "UpcraftLP",
            "Upcraft",
            "GitHub",
            "Java",
            "OOP",
            "LWJGL",
            "C#",
            "Csharp",
            ".NET",
            "Unity",
            "Godot",
            "Unreal",
            "Microsoft",
            "Windows",
            "Linux",
            "DevOps",
            "Docker",
            "Kubernetes",
            "VR",
            "VirtualReality",
            "Render",
            "Rendering",
            "OpenGL",
            "GL",
            "Vulkan",
            "Vk",
            "DirectX",
            "D3D",
            "Direct3d",
            "Minecraft",
            "Modding",
            "Fabric",
            "Quilt",
            "Overwatch",
            "OW"
        ]

        return (
            <Html lang="en">
                <Head>
                    <meta property="og:type" content="website" />
                    <meta property='og:title' content="upcraft.dev" />
                    <meta property='og:site_name' content="Upcraft" />
                    <meta property='og:url' content="https://upcraft.dev" />
                    <meta name="description" content="Indie game developer, Java, C#, Web, C++" />
                    <meta property='og:description' content="Indie game developer" />
                    <meta property='og:image' content='/profile_picture.webp' />
                    <meta property='og:keywords' content={keywords.join(', ')} />
                    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                    <link rel="preload" href="/fonts/gisha.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                </Head>
                <body className="bg-gray-900 font-bold font-sans">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
