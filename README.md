---

 Features
- Real-time validator performance  
- Chain overview (RPC, epoch, slot, inflation)  
- Node monitoring (endpoint health, status)  
- Validator metrics (APR, commission, stake, uptime)  
- Logs viewer  
- Full-width operator dashboard layout  
- Dark mode UI  
- Wallet integration (Rabby, Trust Wallet, MetaMask)  
- Connects directly to Charm-validator-DB API

---

 Project Structure
`
src/
  components/
  pages/
  lib/
  services/
  hooks/
  styles/
`

---

 Installation

1 Install dependencies
`bash
pnpm install
`

2 Start development server
`bash
pnpm dev
`

---

 Environment Variables
.env.local ထဲမှာ ထည့်ရန်:

`
NEXTPUBLICAPI_URL="http://localhost:3000"
NEXTPUBLICSOLANA_CLUSTER="mainnet-beta"
`

---

 API Integration
Dashboard သည် Charm-validator-DB backend API ကို အသုံးပြုသည်။

Validators
- GET /validators
- GET /validators/:id
- GET /validators/chain/:chainId

Chains
- GET /chains

Nodes
- GET /nodes

Metrics
- GET /validators/:id (includes metrics)

Logs
- GET /validators/:id (includes logs)

API details:  
Charm-validator-DB README

---

 UI Modules

 Validator Overview
Validator list + status + APR + stake + commission  
Validator Dashboard UI

 Validator Detail Page
- Metrics chart  
- Logs viewer  
- Node list  
- RPC health  
Validator Detail Page

 Chain Overview
- RPC endpoint  
- Epoch info  
- Slot  
- Inflation  
Chain Overview UI

 Node Monitoring
- Endpoint status  
- Node type  
- Validator association  
Node Monitoring UI

---

 UI/UX
- TailwindCSS  
- Dark mode  
- Full-width operator layout  
- Responsive design  
- Dashboard-style cards + charts  

---

 Tech Stack
- Next.js  
- React  
- TailwindCSS  
- SWR / React Query (optional)  
- Axios for API calls  
- Heroicons for UI icons  

---

 Testing
`bash
pnpm test
`

---

 Deployment

Vercel (recommended)
- Auto-build  
- Environment variables  
- API URL binding  

Docker (optional)
- Multi-stage build  
- Production-ready image  

---

 License
MIT License

---