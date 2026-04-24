// import { useEffect, useState } from "react"
// import api from "../api/adminApi"
// import AdminLayout from "../components/AdminLayout"

// export default function Domains() {

//   const [domains, setDomains] = useState([])
//   const [domain, setDomain] = useState("")

//   const [emails, setEmails] = useState([])
//   const [email, setEmail] = useState("")

//   useEffect(() => {
//     fetchDomains()
//     fetchEmails()
//   }, [])

//   const fetchDomains = async () => {
//     try {
//       const res = await api.get("/domains")
//       setDomains(res.data)
//     } catch (err) {
//       console.error(err)
//     }
//   }

//   const addDomain = async () => {

//     if (!domain) return

//     await api.post("/domains", { domain })

//     setDomain("")
//     fetchDomains()
//   }

//   const deleteDomain = async (id) => {
//     await api.delete(`/domains/${id}`)
//     fetchDomains()
//   }

//   const fetchEmails = async () => {
//     try {
//       const res = await api.get("/whitelist")
//       setEmails(res.data)
//     } catch (err) {
//       console.error(err)
//     }
//   }

//   const addEmail = async () => {
//     if (!email) return
//     try {
//       await api.post("/whitelist", { email })
//       setEmail((""))
//       fetchEmails()
//     } catch (err) {
//       alert(err.response?.data?.error || "Failed to add email")
//     }
//   }

//   const deleteEmail = async (id) => {
//     await api.delete(`/whitelist/${id}`)
//     fetchEmails()
//   }

//   return (
//     <AdminLayout
//       title="Whitelist Management"
//       description="Manage specific client emails for automatic access."
//     >
//       {/* <div className="bg-white border rounded-lg p-8 shadow-sm"> */}
//       {/* 
//       <div className="bg-white border rounded-lg p-8 shadow-sm max-w-3xl mx-auto">
//         <h2 className="text-xl font-bold mb-4 text-gray-800">Authorized Domains</h2>
//         <p className="text-sm text-gray-600 mb-6">Authorize corporate domains to access your Trust Center automatically.</p>

//         <div className="flex gap-3 mb-8">
//           <input
//             className="form-input flex-1"
//             placeholder="e.g. google.com"
//             value={domain}
//             onChange={(e) => setDomain(e.target.value)}
//           />

//           <button className="btn btn-blue-pill" onClick={addDomain}>
//             Add Domain
//           </button>
//         </div>

//         <div className="overflow-hidden border rounded-lg">
//           <table className="w-full text-left border-collapse table-fixed">
//             <thead>
//               <tr className="bg-gray-50 border-bottom">
//                 <th style={{ width: '50%' }} className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Domain</th>
//                 <th style={{ width: '50%' }} className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {domains.length === 0 ? (
//                 <tr>
//                   <td colSpan="2" className="px-6 py-10 text-center text-gray-400 italic">No domains authorized yet.</td>
//                 </tr>
//               ) : (
//                 domains.map((d) => (
//                   <tr key={d._id} className="border-top hover:bg-gray-50 transition-colors">
//                     <td className="px-6 py-4 font-medium text-gray-900">{d.domain}</td>

//                     <td className="px-6 py-4 text-right">
//                       <button
//                         style={{
//                           backgroundColor: '#DE350B',
//                           color: 'white',
//                           fontSize: '10px',
//                           fontWeight: '800',
//                           textTransform: 'uppercase',
//                           padding: '4px 12px',
//                           borderRadius: '100px',
//                           border: 'none',
//                           cursor: 'pointer',
//                           boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
//                           transition: 'opacity 0.2s',
//                           display: 'inline-block'
//                         }}
//                         onMouseOver={(e) => e.target.style.opacity = '0.9'}
//                         onMouseOut={(e) => e.target.style.opacity = '1'}
//                         onClick={() => deleteDomain(d._id)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       */}

//       <div className="bg-white border rounded-lg p-8 shadow-sm max-w-3xl mx-auto mt-8">
//         <h2 className="text-xl font-bold mb-4 text-gray-800">Authorized Emails</h2>
//         <p className="text-sm text-gray-600 mb-6">Authorize specific client emails for automatic access.</p>

//         <div className="flex gap-3 mb-8">
//           <input
//             className="form-input flex-1"
//             placeholder="e.g. client@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <button className="btn btn-blue-pill" onClick={addEmail}>
//             Add Email
//           </button>
//         </div>

//         <div className="overflow-hidden border rounded-lg">
//           <table className="w-full text-left border-collapse table-fixed">
//             <thead>
//               <tr className="bg-gray-50 border-bottom">
//                 <th style={{ width: '50%' }} className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</th>
//                 <th style={{ width: '50%' }} className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {emails.length === 0 ? (
//                 <tr>
//                   <td colSpan="2" className="px-6 py-10 text-center text-gray-400 italic">No emails whitelisted yet.</td>
//                 </tr>
//               ) : (
//                 emails.map((e) => (
//                   <tr key={e._id} className="border-top hover:bg-gray-50 transition-colors">
//                     <td className="px-6 py-4 font-medium text-gray-900">{e.email}</td>

//                     <td className="px-6 py-4 text-right">
//                       <button
//                         style={{
//                           backgroundColor: '#DE350B',
//                           color: 'white',
//                           fontSize: '10px',
//                           fontWeight: '800',
//                           textTransform: 'uppercase',
//                           padding: '4px 12px',
//                           borderRadius: '100px',
//                           border: 'none',
//                           cursor: 'pointer',
//                           boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
//                           transition: 'opacity 0.2s',
//                           display: 'inline-block'
//                         }}
//                         onMouseOver={(e) => e.target.style.opacity = '0.9'}
//                         onMouseOut={(e) => e.target.style.opacity = '1'}
//                         onClick={() => deleteEmail(e._id)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </AdminLayout>
//   )
// }