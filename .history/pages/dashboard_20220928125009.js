export default function Dashboard() {
    return <div>
    <div>
      <Button 
        color={c} onClick={()=> Login()}>
          {text}
          {loginState==="during" && <Loader active/>}
      </Button>
    </div>
        This is a dashboard.
    </div>
}