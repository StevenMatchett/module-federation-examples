import { MatchettContextProvider } from 'matchett-test-context'


const Page = ({Component, pageProps = {}}) => {
  return (
    <MatchettContextProvider func={()=>{console.log("hello there!")}}>
      <Component {...pageProps}/>
    </MatchettContextProvider>
  )

}
export default Page;
