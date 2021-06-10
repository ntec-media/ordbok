import React from 'react'
import Layout from './Layout.tsx'
import { InertiaHead } from '@inertiajs/inertia-react'

export default function Welcome() {
  return (
    <Layout>
      <InertiaHead title="Welcome" />
      <h1>Welcome</h1>
    </Layout>
  )
}