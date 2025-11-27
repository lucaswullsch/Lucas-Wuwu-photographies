export const config = { api: { bodyParser: false } }
export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).end()
  const FORMSPREE = process.env.FORMSPREE_ENDPOINT
  if(!FORMSPREE) return res.status(500).json({error:'Formspree endpoint not configured.'})
  const text = await req.text()
  const matches = text.matchAll(/name="([^"]+)"[\s\S]*?\r\n\r\n([\s\S]*?)(?=\r\n--)/g)
  const data = {}
  for(const m of matches) data[m[1]] = m[2].trim()
  try{
    const response = await fetch(FORMSPREE,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)})
    if(response.ok) return res.status(200).end()
    const txt = await response.text()
    return res.status(500).json({error:'Formspree error', details:txt})
  }catch(e){ return res.status(500).json({error:e.message}) }
}
