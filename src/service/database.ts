/* eslint-disable class-methods-use-this */
import { databaseRef } from './firebase'
import { IProgress } from '../types/IProgress'

class Database {
  async getProgress(nickname: string) {
    const res: IProgress = await databaseRef
      .child(`/progress/${nickname}`)
      .once('value')
      .then((snapshot) => {
        if (!snapshot.exists()) {
          return {
            0: [0, 0, 0],
            1: [0, 0, 0],
            2: [0, 0, 0],
            3: [0, 0, 0]
          }
        }
        return snapshot.val() as IProgress
      })
    return res
  }

  async setProgress(nickname: string, progress: IProgress) {
    await databaseRef.child(`/progress/${nickname}`).set(progress)
  }
}

export default Database
