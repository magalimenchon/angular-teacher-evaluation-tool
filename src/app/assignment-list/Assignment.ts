export interface Assignment {

      student: {
        firstName: string,
        lastName: string
      },
      task: {
        file: File,
        comment: string,
        submmited_date: Date,
        grade: number,
        status: String,
    }
    id: Number;
}