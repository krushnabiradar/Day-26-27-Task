import "./App.css";

import Card from './Card';


function App() {


  let free ={
    title:'FREE',
    price:0,
    user: 'Single User',
    userEnabler: true,
    storage:'5GB Storage',
    storageEnabler: true,
    publicProject: 'Unlimited Public Projects',
    publicProjectEnabler: true,
    community:'Community Access',
    communityEnabler: true,
    privateProject:'Unlimited Private Projects',
    privateProjectEnabler: false,
    support:' Dedicated Phone Support',
    supportEnabler:false,
    domain:'Free Subdomain',
    domainEnabler: false,
    report:'Monthly Status Reports',
    reportEnabler:false,
  }

  let PLUS ={
    title:'PLUS',
    price:9,
    user: '5 Users',
    userEnabler: true,
    storage:'50GB Storage',
    storageEnabler: true,
    publicProject: 'Unlimited Public Projects',
    publicProjectEnabler: true,
    community:'Community Access',
    communityEnabler: true,
    privateProject:'Unlimited Private Projects',
    privateProjectEnabler: true,
    support:'Dedicated Phone Support',
    supportEnabler:true,
    domain:'Free Subdomain',
    domainEnabler: true,
    report:'Monthly Status Reports',
    reportEnabler:false,
  }

  let PRO ={
    title:'PRO',
    price:49,
    user: 'Unlimited Users',
    userEnabler: true,
    storage:'150GB Storage',
    storageEnabler: true,
    publicProject: 'Unlimited Public Projects',
    publicProjectEnabler: true,
    community:'Community Access',
    communityEnabler: true,
    privateProject:'Unlimited Private Projects',
    privateProjectEnabler: true,
    support:'Dedicated Phone Support',
    supportEnabler:true,
    domain:'Free Subdomains',
    domainEnabler: true,
    report:'Monthly Status Reports',
    reportEnabler:true,
  }

  return (
    <>
      <section class="pricing py-5">
        <div class="container">
          <div class="row">
            <Card type={free}/>
            <Card type={PLUS}/>
            <Card type={PRO}/>                               
          </div>
        </div>
      </section>
    </>
  );
}

export default App;