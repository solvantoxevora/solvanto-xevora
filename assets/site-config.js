window.SX_CONFIG={
  SUPABASE_URL:'YOUR_SUPABASE_URL',
  SUPABASE_ANON_KEY:'YOUR_SUPABASE_ANON_OR_PUBLISHABLE_KEY',
  OWNER_EMAIL:'solvantoxevora@gmail.com',
  defaults:{
    maintenance:{enabled:false,message:'Website is currently under maintenance. We are making improvements and will be back shortly.'},
    brand:{name:'Solvanto Xevora',tagline:'Trustable software, built with purpose'},
    labels:{home:'Home',software:'Software',news:'News',about:'About',support:'Support',softwareIntro:'Built for practical work',softwareIntroText:'Explore software releases from Solvanto Xevora. Each software badge is directly clickable.',newsTitle:'Latest updates',aboutKicker:'About',supportKicker:'Support',previewTitle:'Preview',capabilitiesTitle:'Software capabilities',requirementsTitle:'Detailed requirements'},
    hero:{eyebrow:'Independent software company',title:'Software that works for real needs',description:'Solvanto Xevora is a self-paced company creating practical, trustable software for everyday work, business and productivity.',primary:'Explore Software',secondary:'Contact Support'},
    about:{title:'About Solvanto Xevora',text:'Solvanto Xevora is a self-paced software company focused on creating practical, trustable software. We build useful tools with clear interfaces, straightforward features and continuous improvements based on real user needs.',points:[['Self-paced','We develop and improve software independently at a steady pace.'],['Trustable','We aim for reliable releases, clear information and responsible support.'],['Broad spectrum','Our software can cover business, productivity and other practical needs.'],['User focused','Feedback and real-world problems help guide future improvements.']]},
    support:{title:'Support & Cooperation',text:'If you face any problem with our software or website, contact us and we will work to solve it as soon as possible. Solvanto Xevora cooperates with users to understand issues, improve releases and provide practical help.',email:'solvantoxevora@gmail.com'},
    software:{name:'Retail Management',version:'v1.0.0',description:'A Windows desktop store management system for POS/Billing, inventory and batches, sales reporting, settings, sales history and customer invoice printing.',tags:['Windows x64','Store Management','POS / Billing'],capabilities:[['POS / Billing','Create invoices, add products, choose customer/payment details and complete sales.'],['Inventory & Batches','Manage products, IDs, batches, dates, stock, costs and selling prices.'],['Sales Reports','Review revenue, costs, gross profit, sales counts and detailed sales history.'],['Settings','Configure store information, currency, low-stock threshold, reports, batches and tags.'],['Customer Invoices','Review invoice details, purchased items, totals and print customer invoices.'],['Admin Controls','Protected settings and sales-history controls for store management.']],requirements:[['Operating system','Windows desktop. The supplied installer is an x64 release with Windows compatibility metadata.'],['Architecture','x64 installer: Retail Management_0.1.0_x64-setup.exe'],['Installer size','Approximately 3.2 MB for the supplied installer.'],['Hardware','No separate CPU/RAM minimum was supplied with this release. Hardware requirements may vary by Windows installation.']]},
    news:[{date:'Latest',title:'Retail Management available',body:'Retail Management is now available as the first software release on the Solvanto Xevora website.'},{date:'Updates',title:'Website improvements',body:'New account, support, download and software-detail features are being added to improve the experience.'},{date:'Support',title:'User feedback matters',body:'Problems and useful suggestions help guide future software improvements.'}],
    floating:[{type:'badge',text:'Trustable Software',icon:'✓',position:'bottom-left',href:'#about',enabled:true},{type:'badge',text:'Windows Software',icon:'▣',position:'top-right',href:'#apps',enabled:true},{type:'button',text:'Support',icon:'?',position:'bottom-right',href:'#contact',enabled:true}]
  }
};
window.SX_MERGE=function(base,override){
  if(!override)return JSON.parse(JSON.stringify(base));
  const out=JSON.parse(JSON.stringify(base));
  const merge=(a,b)=>{Object.keys(b||{}).forEach(k=>{if(b[k]&&typeof b[k]==='object'&&!Array.isArray(b[k])&&a[k]&&typeof a[k]==='object'&&!Array.isArray(a[k]))merge(a[k],b[k]);else a[k]=b[k]})};
  merge(out,override);return out;
};
window.SX_CREATE_CLIENT=function(){
  const c=window.SX_CONFIG;const ready=!c.SUPABASE_URL.startsWith('YOUR_')&&!c.SUPABASE_ANON_KEY.startsWith('YOUR_');
  return {ready,client:ready&&window.supabase?supabase.createClient(c.SUPABASE_URL,c.SUPABASE_ANON_KEY):null};
};
window.SX_LOAD_CONFIG=async function(){
  const c=window.SX_CONFIG;let result=SX_CREATE_CLIENT();let cfg=SX_MERGE(c.defaults,null);
  if(!result.ready)return cfg;
  try{const {data,error}=await result.client.from('site_config').select('config').eq('id',1).maybeSingle();if(!error&&data?.config)cfg=SX_MERGE(cfg,data.config)}catch(e){}
  return cfg;
};
window.SX_TRACK_VISIT=async function(page){
  const {ready,client}=SX_CREATE_CLIENT();if(!ready||!client)return;
  let id=localStorage.getItem('sx_visitor_id');if(!id){id=crypto.randomUUID();localStorage.setItem('sx_visitor_id',id)}
  const key='sx_last_'+page,now=Date.now(),last=Number(localStorage.getItem(key)||0);if(now-last<86400000)return;
  localStorage.setItem(key,String(now));await client.from('site_visits').insert({visitor_id:id,page:String(page).slice(0,100)});
};
