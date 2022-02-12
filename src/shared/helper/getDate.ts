export default function getDate(date:number):(string | string) []{
    const newDate = date * 1000
    const res = new Date(newDate)
    const today = new Date()
    let dayString = ''
    const dateString =`${res.toLocaleString('ru',{month: 'long', day:'numeric' })}`
    if(res.getDate() === today.getDate()){
        dayString = 'Сегодня'
    }else if(res.getDate() === today.getDate()+1){
        dayString = 'Завтра'
    } else {
        dayString =  new Intl.DateTimeFormat('ru-RU', {weekday: 'short'}).format(res)
    }
    return [dayString, dateString]
}