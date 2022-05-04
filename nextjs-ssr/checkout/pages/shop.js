import dynamic from 'next/dynamic';
const page = import('shop/shop');
console.log("PAGE")
const Page = dynamic(() => import('shop/shop'));
Page.getInitialProps = async ctx => {
  const p = (await page);
  console.log("getInitialProps called", p)
  const getInitialProps = p.default?.getInitialProps;
  if (getInitialProps) {
    console.log("getInitialProps is defined")
    return getInitialProps(ctx);
  }
  if (ctx){
    console.log("getInitialProps is not defined")
  }
  
  return {};
};

console.log("PAGE OBJECT",Page)
export default Page;
