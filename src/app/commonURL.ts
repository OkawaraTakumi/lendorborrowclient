
//[リクエストメソッド]_[処理内容]_URL

// const BASE_URL = 'http://localhost:5000'
const BASE_URL = '/api'

//auth
//ユーザー登録時のURL
export const POST_REGIST_URL = `${BASE_URL}/auth/register`
//ログイン処理を行う場合のURL
export const POST_LOGIN_URL = `${BASE_URL}/auth/login`
//ログインユーザーの情報取得時のURL
export const GET_CURRENT_USER_URL = `${BASE_URL}/auth/getCurrentUser`


//LorB
//貸し借りテーブルを作成
export const POST_CREATE_LORB = `${BASE_URL}/LorB/createLorB`
//貸し借りテーブルに貸し借りを追加
export const POST_UPDATE_LORB_DETAIL = `${BASE_URL}/LorB/updateLorBDetail`
//貸し借りテーブルの作成、追加の承認
export const PUT_APPROVE_CREATE = `${BASE_URL}/LorB/approveCreate`
//貸し借りテーブルの作成追加の拒否
export const PUT_REJECT_CREATE = `${BASE_URL}/LorB/rejectCreate`
//作成中の貸し借りテーブルの取得
export const GET_GET_ONMAKING = `${BASE_URL}/LorB/getOnMaking`
//交渉中の貸し借りテーブルの取得
export const GET_GET_ONBEING_SUGGESTED = `${BASE_URL}/LorB/getOnBeingSuggested`
//任意の相手との貸し借りテーブルの取得
export const GET_GET_LORB = `${BASE_URL}/LorB/getLorB`
//所持している全ての貸し借りテーブルを取得
export const GET_GET_LORB_KEEP_LORB = `${BASE_URL}/LorB/getLorBKeepLorB`
//自分に関わらず存在している全ての貸し借りデータを全て取得
export const GET_GET_ALL_LORB = `${BASE_URL}/LorB/getAllLorB`
//状態に関わらず所持している全ての貸し借りを取得
export const GET_GET_LORB_IHAVE = `${BASE_URL}/LorB/getLorBKeepLorB`
//解消済みの貸し借りデータを取得
export const GET_LORB_COMPLETED = `${BASE_URL}/LorB/getLorBCompleted`
//交渉の内容を設定または更新
export const PUT_UPDATE_NEGOTIATE = `${BASE_URL}/LorB/updateNegotiate`
//交渉を承認
export const PUT_REJECT_NEGOTIATE = `${BASE_URL}/LorB/rejectNegotiate`
//任意の貸し借りデータを論理削除,削除と書いてあるがstateを更新するだけなのでPUTで良い
export const PUT_DELETE_LORB_TABLE = `${BASE_URL}/LorB/deleteLorBtable`


//User
export const EDIT_USER =`${BASE_URL}/user/edit`;
export const GET_FOLLOW = `${BASE_URL}/user/getFollow`;
export const POST_FOLLOW_USER = `${BASE_URL}/user/followUser`;
export const GET_GET_FOLOWER = `${BASE_URL}/user/getFollower`;