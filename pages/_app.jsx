import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'tailwindcss/tailwind.css'
import '../styles/fonts.css'

library.add(fab, far, fas);

export default ({ Component, pageProps }) => (<Component {...pageProps} />)
