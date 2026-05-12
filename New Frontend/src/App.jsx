import './App.css'
import { Wallet } from "./component/Wallet"
import { CreateRequest } from './component/CreateRequest'
import { MakePayment } from "./component/MakePayment"
import { Refund } from "./component/Refund"
import { SendEther } from "./component/SendEther"
import { TotalContribution } from "./component/TotalContribution"
import { VoterRequest } from "./component/VoterRequest"
import { YourContribution } from "./component/YourContribution"
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-gray-100">
      <Wallet>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center py-12 animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent mb-3">
              Welcome to Crowdfunding App
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl font-medium">
              Contribute, vote, and fund ideas with transparency
            </p>
            <p className="text-gray-400 text-lg sm:text-xl font-medium">
              Contract Address - 0x9b52b8c751901ecc1ed9bc950f3a774010daeec6
            </p>
          </header>

          {/* Component Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
            <div className="card-gradient p-5 rounded-xl shadow-lg hover-lift">
              <SendEther />
            </div>
            
            <div className="card-gradient p-5 rounded-xl shadow-lg hover-lift">
              <YourContribution />
            </div>
            
            <div className="card-gradient p-5 rounded-xl shadow-lg hover-lift">
              <CreateRequest />
            </div>
            
            <div className="card-gradient p-5 rounded-xl shadow-lg hover-lift">
              <MakePayment />
            </div>
            
            <div className="card-gradient p-5 rounded-xl shadow-lg hover-lift">
              <VoterRequest />
            </div>
            
            <div className="card-gradient p-5 rounded-xl shadow-lg hover-lift">
              <Refund />
            </div>
            
            <div className="card-gradient p-5 rounded-xl shadow-lg hover-lift md:col-span-2 lg:col-span-3">
              <TotalContribution />
            </div>
          </div>
        </div>
      </Wallet>

      {/* Toast Notifications */}
      <Toaster 
        position="top-right" 
        toastOptions={{ 
          className: "toast-notification"
        }} 
      />
    </div>
  )
}

export default App