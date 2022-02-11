export default function getDate(date:number):string{
    const newDate = date * 1000
    const res = new Date(newDate)
    const today = new Date()
    if(res.getDate() === today.getDate()){
        return 'Сегодня'
    }else if(res.getDate() === today.getDate()+1){
        return 'Завтра'
    }
    return `${res.toLocaleString('ru',{month: 'long', day:'numeric' })}`
}