import React from 'react'

const About = React.lazy(() => import('./About'))
const Contact = React.lazy(() => import('./Contact'))
const Dashboard = React.lazy(() => import('./Dashboard'))
const Documentation = React.lazy(() => import('./Documentation'))
const Home = React.lazy(() => import('./Home'))
const Products = React.lazy(() => import('./Products'))
const Profile = React.lazy(() => import('./Profile'))
const Resources = React.lazy(() => import('./Profile'))
const Signup = React.lazy(() => import('./Signup'))

export {About, Contact, Dashboard, Documentation, Home, Products, Profile, Resources, Signup}