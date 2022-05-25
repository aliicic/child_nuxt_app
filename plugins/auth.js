export default function ({ $auth, redirect }) {
  if ($auth.loggedIn) {
    return true;
  } else {
    redirect("https://setin.nebular.ir/login?app=2");
  }
}
