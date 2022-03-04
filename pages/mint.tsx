import { NextPage } from 'next'
import Layout from '../components/Layout'

const MintPage: NextPage = () => (
  <Layout title="Mint">
    <div className="flex min-h-screen items-center justify-items-center">
      <div className="flex flex-1 flex-col">
        <p className="text-center text-gray-300">Mint your NFT</p>
      </div>
    </div>
  </Layout>
)

export default MintPage