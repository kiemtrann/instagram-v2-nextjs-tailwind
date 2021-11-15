import * as React from 'react'
import Stories from '../components/Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'

export interface IFeedProps {
  handleLogout: () => void
}

export default function Feed(props: IFeedProps) {
  return (
    <div>
      <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
        <section className="col-span-2">
          <Stories />
          <Posts />
        </section>

        {/* Section */}
        <section className="hidden xl:inline-grid md:col-span-1">
          <div className="fixed">
            <MiniProfile handleLogout={props.handleLogout} />
            <Suggestions />
          </div>
        </section>
      </main>
    </div>
  )
}
