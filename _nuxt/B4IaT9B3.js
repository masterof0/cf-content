function f(s,n){return Object.entries(s).reduce((r,[e,t])=>(r[e]=typeof t=="function"?t({class:n?.[e]}):t,r),n||{})}export{f as t};
