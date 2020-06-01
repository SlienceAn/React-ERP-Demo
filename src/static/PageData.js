import StaffList from '../components/StaffList/StaffList';
import DepartmentControl from '../components/Department/DepartmentControl';
import StaffWork from '../components/StaffWork/StaffWork';
import Inventory from '../components/Inventory/Inventory';
import ProjectManger from '../components/ProjectManger/ProjectManger';
import LeaveApply from '../components/StaffWork/LeaveApply';
import StatusApply from '../components/StaffWork/StatusApply';
import Money from '../components/StaffWork/Money';
import MainPage from '../components/MainIndex/MainPage';
export const routerMap = [
    {
        id: 'home',
        href: '/',
        component: MainPage,
        icon: 'fas fa-home',
        title: '回首頁'
    },
    {
        id: 'StaffList',
        href: '/StaffList',
        component: StaffList,
        icon: 'fas fa-list',
        title: '員工列表'
    },
    {
        id: 'StaffWork',
        href: '/StaffWork',
        component: StaffWork,
        icon: 'far fa-calendar-alt',
        title: '出勤列表'
    },
    {
        id: 'DepartmentControl',
        href: '/DepartmentControl',
        component: DepartmentControl,
        icon: 'far fa-address-book',
        title: '部門管理'
    },
    {
        id: 'Inventory',
        href: '/Inventory',
        component: Inventory,
        icon: 'fas fa-database',
        title: '庫存管理'
    },
    {
        id: 'ProjectManger',
        href: '/ProjectManger',
        component: ProjectManger,
        icon: 'fas fa-cog',
        title: '專案管理'
    }
]

export const MainPageRoute = {
    RouteName: '首頁',
    Route: [
        { id: '文件管理', href: '/', component: '' },
        { id: '專案控管', href: '/', component: '' },
        { id: '行事曆', href: '/', component: '' },
        { id: '公告調整', href: '/', component: '' },
    ]
}
export const AnnouncementData = [
    { date: '2020/05/04', content: '庫存到貨通知辦法-現政片空式坡們分異約得軍分成性，喜設對以銀標護故四我的學驚院格爸在呢集電紀成們不早後寶進家有廣是事者程人期大我接電藝我爸白、河心生小的夫，們趣色由統！校不我達。得訴的能多親著子議？形的交光推孩少時新藥候出藝費如一重己屋企歌利服友西有花草綠一作不的、他而境美像他下長說當星教通；天民生故形作如代一水力依上破，感拿著期者我他前團過早後了果……微清而讓眼集童，價著還步外黃結、喜樂起己是說孩愛重紅營人臉務一事，快東發當造樣洋年了庭選，度是了亞結一由，容立寶火電品！自於力，許個當是！主的的。車心路：時弟計方又有亮今的心度是活說有有過不國外生作；卻我我身些是方心。' },
    { date: '2020/04/24', content: '會議室預約辦法更新-分異約得軍分成性，喜設對以銀標護故四我的學驚院格爸' },
    { date: '2020/04/20', content: '出差事務調整-分異約得軍分成性，喜設對以銀標護故四我的學驚院格爸' },
    { date: '2020/02/25', content: '春假須知-假期-分異約得軍分成性，喜設對以銀標護故四我的學驚院格爸' }
]

export const ProjectList = [
    { type: 'web', name: '葳葳數位科技公司多人運動網站建置', loading: Math.floor(Math.random() * 100) },
    { type: 'web', name: '2020市區靈車整合系統服務案', loading: Math.floor(Math.random() * 100) },
    { type: 'system', name: '雲端打人系統維護更新', loading: Math.floor(Math.random() * 100) },
    { type: 'app', name: 'CMS庫存管理輔助系統行動端', loading: Math.floor(Math.random() * 100) },
    { type: 'system', name: '驚動智障產學開發案', loading: Math.floor(Math.random() * 100) }
]

export const FilesExample = {
    total: [
        { id: 'PDF ', total: 7, text: 'PDF' },
        { id: 'Word', total: 5, text: 'Word' },
        { id: 'Excel', total: 12, text: 'Excel' },
        { id: 'PPT', total: 12, text: 'PPT' },
        { id: 'ZIP', total: 12, text: 'Zip' },
        { id: 'TXT', total: 12, text: 'TXT' },
    ],
    files:
        [
            { type: 'pdf', name: '2020資訊組人事異動.pdf' },
            { type: 'word', name: '2019南科嘉義PM精神檢驗報告.word' },
            { type: 'ppt', name: '2020上半年幹話語錄擷取.ppt' },
            { type: 'excel', name: '高層驗腦報表.xsxl' },
            { type: 'pdf', name: '如何證明之證明無須證明手冊.pdf' }
        ]
}

export const ListNotice = [
    { id: '本月新進人員', total: '6', icon: 'fas fa-user-plus', icontext: '本月新進人員' },
    { id: '本月離職人員', total: '1', icon: 'fas fa-user-alt-slash', icontext: '本月離職人員' },
    { id: '本月調職人員', total: '4', icon: 'fas fa-undo', icontext: '本月調職人員' },
    { id: '本月退休人員', total: '2', icon: 'fas fa-user-graduate', icontext: '本月退休人員' },
]
export const ListRoute = {
    RouteName: '員工列表',
    Route: [
        { id: '狀態異動', href: '', component: '' },
        { id: '新增人員', href: '', component: '' }
    ]
}
export const WorksNotice = [
    { id: '事假', total: '1', icon: 'fas fa-briefcase', icontext: '事假' },
    { id: '病假', total: '5', icon: 'fas fa-user-md', icontext: '病假' },
    { id: '特休', total: '1', icon: 'fas fa-bed', icontext: '特休' },
    { id: '曠職', total: '0', icon: 'fas fa-ban', icontext: '曠職' },
    { id: '出差', total: '0', icon: 'fas fa-car', icontext: '出差' },
]
export const WorksRoute = {
    RouteName: '出勤列表',
    Route: [
        { id: '請假申請', href: '/LeaveApply', component: LeaveApply, },
        { id: '出勤異常申請', href: '/StatusApply', component: StatusApply, },
        { id: '出差費用申請', href: '/Money', component: Money, },
    ]
}


export const DepartmentData = [
    { id: '網頁開發部', header: '網頁開發部', color: 'bg-primary', manger: 'XXX', tel: '09XX-XXX-XXX', icon: 'fas fa-code' },
    { id: '行動應用部', header: '行動應用部', color: 'bg-success', manger: 'XXX', tel: '09XX-XXX-XXX', icon: 'fas fa-code-branch' },
    { id: '人事部', header: '人事部', color: 'bg-warning', manger: 'XXX', tel: '09XX-XXX-XXX', icon: 'fas fa-user-tie' },
    { id: '會計部', header: '會計部', color: 'bg-info', manger: 'XXX', tel: '09XX-XXX-XXX', icon: 'fas fa-money-bill-wave' },
    { id: '硬體維修部', header: '硬體維修部', color: 'bg-danger', manger: 'XXX', tel: '09XX-XXX-XXX', icon: 'fas fa-money-bill-wave' },

]

export const WorksFakeDays = [
    { id: 'work', icon: 'fas fa-business-time mr-2', text: '事假', value: 3, date: ["2018-07-05", "2018-07-06", "2018-07-07"], reason: '' },
    { id: 'sick', icon: 'fas fa-user-md mr-2', text: '病假', value: 0, date: [], reason: '' },
    { id: 'other', icon: 'fas fa-align-justify mr-2', text: '其餘假別', value: 0, date: [], reason: '' },
    { id: 'special', icon: 'fas fa-bed mr-2', text: '特休', value: 0, date: [], reason: '' },
    { id: 'out', icon: 'fas fa-bus mr-2', text: '出差', value: 1, date: ["2020-04-24"], reason: '' },
    { id: 'rest', icon: 'fas fa-charging-station mr-2', text: '補休', value: 0, date: [], reason: '' },
]

export const CateChioce = [
    { id: 'cog', cate: '維修工具', icon: 'fas fa-cog' },
    { id: 'ma', cate: '機械零件', icon: 'fas fa-user' },
    { id: 'seafood', cate: '海鮮食品', icon: 'fas fa-fish' },
    { id: 'live', cate: '生活用品', icon: 'fas fa-user' },
    { id: 'kitchen', cate: '廚房用具', icon: 'fas fa-utensils' },
    { id: 'bicycle', cate: '交通工具', icon: 'fas fa-bicycle' },
    { id: 'clear', cate: '清潔用具', icon: 'fas fa-broom' },
    { id: 'food', cate: '其餘貨物', icon: 'fas fa-dolly-flatbed' }
]
