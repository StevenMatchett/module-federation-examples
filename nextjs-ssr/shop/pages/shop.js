const Page = (props) => {
  console.log("ASDFPROPS", props)
  return <>THIS IS THE SHOP</>
}
Page.getInitialProps = async ctx => {
  
  return {data:"abc"};
};
export default Page;
