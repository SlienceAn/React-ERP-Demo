
let faker = require('faker');
faker.locale = "zh_TW";

let StaffListRes = [];
let StaffWorkRes = [];
let StaffDepartRes = [];
let InventoryRes = [];
let YearCalendar = {
    year: '2020',
    needMonths: []
}
export const DepartmentList = ["網頁開發部", "行動應用部", "人事部", "會計部", "硬體維護部"]
export const WorksList = ["新進", "在職", "離職", "退休", "調職"]
export const CateHoilday = ["事假", "病假", "特休", "加班補休", "出差"]
let RandomTotal = Math.floor(Math.random() * 100)
//隨機陣列取值
export const RandomDetail = (DataArr, Max) => {
    let index = Math.floor(Math.random() * (Max + 1))
    return DataArr[index]
}

for (let i = 0; i < RandomTotal; i++) {
    //員工列表資料
    StaffListRes.push({
        StaffCode: (faker.random.number() + faker.random.word()).substring(0, 5),
        ChineseName: faker.name.firstName() + faker.name.lastName(),
        EnglishName: faker.name.findName(),
        Phone: faker.phone.phoneNumber(),
        Address: faker.address.city(),
        Email: faker.internet.email(),
        Department: RandomDetail(DepartmentList, 4),
        DepartmentCode: faker.random.number(),
        Status: RandomDetail(WorksList, 4)
    })
    //出勤列表資料
    StaffWorkRes.push({
        StaffCode: (faker.random.number() + faker.random.word()).substring(0, 5),
        ChineseName: faker.name.firstName() + faker.name.lastName(),
        EnglishName: faker.name.findName(),
        Phone: faker.phone.phoneNumber(),
        Address: faker.address.city(),
        Status: RandomDetail(CateHoilday, 4),
        Date: faker.date.month()
    })
}
const news = StaffListRes.filter(el => el.Status == '新進').length
const leave = StaffListRes.filter(el => el.Status == '離職').length
const change = StaffListRes.filter(el => el.Status == '調職').length
const retire = StaffListRes.filter(el => el.Status == '退休').length
export const StatusListAll = [news, leave, change, retire]
const works = StaffWorkRes.filter(el => el.Status == '事假').length
const sick = StaffWorkRes.filter(el => el.Status == '病假').length
const special = StaffWorkRes.filter(el => el.Status == '特休').length
const more = StaffWorkRes.filter(el => el.Status == '加班補休').length
const out = StaffWorkRes.filter(el => el.Status == '出差').length
export const StaffWorkAll = [works, sick, special, more, out]
//部門管理資料
for (let i = 0; i < DepartmentList.length; i++) {
    StaffDepartRes.push({
        Department: DepartmentList[i],
        LeaderName: faker.name.firstName() + faker.name.lastName(),
        EnglishName: faker.name.findName(),
        Phone: faker.phone.phoneNumber(),
        Status: RandomDetail(CateHoilday, 4),
        Members: Math.floor(Math.random() * 10)
    })
}
//庫存管理資料
for (let i = 0; i < RandomTotal; i++) {
    InventoryRes.push({
        proID: i + 1,
        id: faker.name.prefix(),
        department: faker.commerce.department(),
        company: faker.company.suffixes(),
        database: faker.database.column(),
        finance: faker.finance.account(),
        hacker: faker.hacker.abbreviation(),
        helpers: faker.helpers.randomize(),
        internet: faker.internet.ip(),
        system: faker.system.fileName(),
        phone: faker.phone.phoneNumber(),

    })
}
let YearCalendar_date = []
for (let j = 0; j < 30; j++) {
    YearCalendar_date.push(
        { day: j + 1, content: '' }
    )
}
for (let i = 0; i < 12; i++) {
    YearCalendar.needMonths.push(
        { month: i + 1, date: YearCalendar_date }
    )
}


const randomName = (num) => {
    let tree = [];
    for (let i = 0; i < num; i++) {
        tree.push(faker.name.firstName() + faker.name.lastName())
    }
    return tree;
}
let PartyTree = [
    {
        name: '網頁開發部',
        leader: randomName(2),
        member: randomName(6)
    },
    {
        name: '行動應用部',
        leader: randomName(1),
        member: randomName(7)
    },
    {
        name: '會計部',
        leader: randomName(1),
        member: randomName(3)
    },
    {
        name: '人事部',
        leader: randomName(2),
        member: randomName(4)
    },
    {
        name: '硬體維護部',
        leader: randomName(2),
        member: randomName(5)
    },


]
export { StaffListRes, StaffWorkRes, StaffDepartRes, InventoryRes, YearCalendar, PartyTree }