'use client';
import { useState } from 'react';

const aioxAgents = [
  { id: 'aiox-master', name: 'AIOX Master', role: 'Orchestration', phase: 'meta', color: '#8B5CF6' },
  { id: 'analyst', name: 'Analyst', role: 'Business PRD', phase: 'planning', color: '#3B82F6' },
  { id: 'pm', name: 'PM', role: 'Product Management', phase: 'planning', color: '#3B82F6' },
  { id: 'architect', name: 'Architect', role: 'System Design', phase: 'planning', color: '#3B82F6' },
  { id: 'sm', name: 'Scrum Master', role: 'Sprint Mgmt', phase: 'dev', color: '#10B981' },
  { id: 'dev', name: 'Developer', role: 'Implementation', phase: 'dev', color: '#10B981' },
  { id: 'qa', name: 'QA', role: 'Testing', phase: 'dev', color: '#10B981' },
  { id: 'devops', name: 'DevOps', role: 'CI/CD', phase: 'dev', color: '#10B981' },
];
const claudeAgents = [
  { id: 'typescript-pro', name: 'TypeScript Pro', cat: 'Lang', color: '#F59E0B' },
  { id: 'python-pro', name: 'Python Pro', cat: 'Lang', color: '#F59E0B' },
  { id: 'react-specialist', name: 'React', cat: 'Lang', color: '#F59E0B' },
  { id: 'nextjs-developer', name: 'Next.js', cat: 'Lang', color: '#F59E0B' },
  { id: 'terraform-engineer', name: 'Terraform', cat: 'Infra', color: '#EF4444' },
  { id: 'kubernetes-specialist', name: 'K8s', cat: 'Infra', color: '#EF4444' },
  { id: 'cloud-architect', name: 'Cloud Arch', cat: 'Infra', color: '#EF4444' },
  { id: 'security-auditor', name: 'Security', cat: 'QA', color: '#EC4899' },
  { id: 'ml-engineer', name: 'ML Eng', cat: 'AI', color: '#8B5CF6' },
  { id: 'data-scientist', name: 'Data Sci', cat: 'AI', color: '#8B5CF6' },
  { id: 'llm-architect', name: 'LLM Arch', cat: 'AI', color: '#8B5CF6' },
];
const squads = [
  { name: 'FullStack', aiox: ['analyst','architect','sm','dev','qa'], claude: ['typescript-pro','react-specialist','nextjs-developer'] },
  { name: 'Data AI', aiox: ['analyst','architect','dev'], claude: ['ml-engineer','data-scientist','python-pro'] },
  { name: 'DevOps', aiox: ['architect','devops','qa'], claude: ['terraform-engineer','kubernetes-specialist','cloud-architect'] },
];
export default function Home() {
  const [tab, setTab] = useState('agents');
  const [active, setActive] = useState([]);
  const toggle = (id) => setActive(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);
  return (<div style={{minHeight:'100vh',background:'#0F172A',color:'white',fontFamily:'system-ui'}}>
    <header style={{padding:'24px 48px',borderBottom:'1px solid #1E293B'}}>
      <h1 style={{fontSize:28,fontWeight:'bold',margin:0}}>Super Agent Dashboard</h1>
      <p style={{color:'#94A3B8',margin:'4px 0'}}>AIOX + Claude | {aioxAgents.length+claudeAgents.length} agents | {active.length} active</p>
    </header>
    <nav style={{display:'flex',padding:'0 48px',borderBottom:'1px solid #1E293B'}}>
      {['agents','squads','monitor'].map(t=>(<button key={t} onClick={()=>setTab(t)} style={{padding:'16px 24px',background:'none',border:'none',color:tab===t?'#3B82F6':'#94A3B8',borderBottom:tab===t?'2px solid #3B82F6':'none',cursor:'pointer',fontSize:16}}>{t}</button>))}
    </nav>
    <main style={{padding:'32px 48px'}}>
      {tab==='agents'&&(<div>
        <h2 style={{color:'#3B82F6',mb:16}}>AIOX Core Agents</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:16,marginBottom:32}}>
          {aioxAgents.map(a=>(<div key={a.id} onClick={()=>toggle(a.id)} style={{padding:16,borderRadius:12,background:active.includes(a.id)?'#1E3A5F':'#1E293B',border:active.includes(a.id)?'2px solid #3B82F6':'2px solid #334155',cursor:'pointer'}}><span style={{fontSize:12,color:'#94A3B8'}}>{a.phase}</span><h3 style={{margin:'8px 0 4px',fontSize:15}}>{a.name}</h3><p style={{margin:0,fontSize:12,color:'#94A3B8'}}>{a.role}</p></div>))}
        </div>
        <h2 style={{color:'#F59E0B',mb:16}}>Claude Subagents</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:16}}>
          {claudeAgents.map(a=>(<div key={a.id} onClick={()=>toggle(a.id)} style={{padding:16,borderRadius:12,background:active.includes(a.id)?'#1E3A5F':'#1E293B',border:active.includes(a.id)?'2px solid #F59E0B':'2px solid #334155',cursor:'pointer'}}><span style={{fontSize:12,color:'#94A3B8'}}>{a.cat}</span><h3 style={{margin:'8px 0 4px',fontSize:15}}>{a.name}</h3><p style={{margin:0,fontSize:12,color:'#94A3B8'}}>{a.id}</p></div>))}
        </div>
      </div>)}
      {tab==='squads'&&(<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:24}}>
        {squads.map(s=>(<div key={s.name} style={{padding:24,borderRadius:12,background:'#1E293B',border:'2px solid #334155'}}><h3 style={{margin:'0 0 16px'}}>Squad: {s.name}</h3><p style={{color:'#3B82F6',fontSize:14}}>AIOX: {s.aiox.join(', ')}</p><p style={{color:'#F59E0B',fontSize:14}}>Claude: {s.claude.join(', ')}</p><button onClick={()=>[...s.aiox,...s.claude].forEach(toggle)} style={{marginTop:12,width:'100%',padding:10,background:'#3B82F6',border:'none',borderRadius:8,color:'white',cursor:'pointer'}}>Activate Squad</button></div>))}
      </div>)}
      {tab==='monitor'&&(<div style={{padding:24,background:'#1E293B',borderRadius:12}}><h3>Active: {active.length}</h3><div style={{display:'flex',flexWrap:'wrap',gap:8,mt:12}}>{active.map(a=>(<span key={a} onClick={()=>toggle(a)} style={{padding:'6px 12px',background:'#10B981',borderRadius:8,cursor:'pointer',fontSize:14}}>{a} x</span>))}</div>{!active.length&&<p style={{color:'#94A3B8'}}>No agents active</p>}</div>)}
    </main>
  </div>);
}
