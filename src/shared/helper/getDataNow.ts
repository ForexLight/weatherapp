export class getData {
    

    static now():string {
        const date = new Date()
        const hours = date.getHours()
        let minutes: string = date.getMinutes().toString()
        if(minutes.length === 1){
        minutes = '0'+ minutes
        }
    return `${hours} : ${minutes}`
    }
    static day(data: Date):string {
        if (data.getDate() === (new Date).getDay()){
            return 'Сегодня'
        }
        return ''
    }

}