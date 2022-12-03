import React from 'react'

const About = React.lazy(() => import('./About'))
const Contact = React.lazy(() => import('./Contact'))
const Home = React.lazy(() => import('./Home'))
const Profile = React.lazy(() => import('./Profile'))
const Signup = React.lazy(() => import('./Signup'))

export {About, Contact, Home, Profile, Signup}