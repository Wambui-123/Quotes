import { faTrash, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

interface Quote {
  id: number;
  name: string;
  content: string;
  author: string;
  upVotes: number;
  downVotes: number;
  lastUpdatedAt: string;
}

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  
  faTrash = faTrash;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  yourName = ''
  authorsName = ''
  enteredQuote = ''

  quotes: Quote[] = [
    {
      id: 1,
      name: 'Yvonne Muthui',
      content: "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
      author: 'James Cameron',
      lastUpdatedAt: '2021-12-10T14:20:58.204Z',
      upVotes: 2,
      downVotes: 2
    },
    {
      id: 2,  
      name: 'Jim Ron',
      content: "The biggest adventure you can take is to live the life of your dreams.",
      author: 'Oprah Winfrey',
      lastUpdatedAt: '2022-04-01T14:20:58.204Z',
      upVotes: 9,
      downVotes: 3
    },
    {
      id: 3,
      name: 'Grace Williams',
      content: 'We know what we are, but know not what we may be.',
      author: 'William Shakespeare',
      lastUpdatedAt: '2022-04-10T14:20:58.204Z',
      upVotes: 23,
      downVotes: 2
    },
    {
      id: 4,
      name: 'Joy Cameron',
      content: 'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
      author: 'James Cameron',
      lastUpdatedAt: '2022-04-10T14:20:58.204Z',
      upVotes: 11,
      downVotes: 0
    },
    {
      id: 5,
      name: 'Anne Marie',
      content: 'What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.',
      author: 'Ralph Waldo Emerson',
      lastUpdatedAt: '2022-04-10T14:20:58.204Z',
      upVotes: 9,
      downVotes: 1
    }
  ]

  vote(id: number, type: 'upVote' | 'downVote') {
    this.quotes = this.quotes.map(quote => {
      if (quote.id === id) {
        if (type === 'upVote') {
          quote.upVotes = quote.upVotes + 1
        }
        if (type === 'downVote') {
          quote.downVotes = quote.downVotes + 1
        }
        return quote
      }
      return quote
    })
  }

  deleteQuote(id: number) {
    this.quotes = this.quotes.filter(quote => quote.id !== id)
  }

  hasHighestUpvotes(quote: Quote): Quote | undefined {
    console.log({ quote })
    let highestVote = 0
    let quoteWithHighestVote: Quote  | undefined = undefined

    this.quotes.forEach(quote => {
      if (highestVote < quote.upVotes) {
        highestVote = quote.upVotes
        quoteWithHighestVote = quote
      }
    })

    console.log({ quoteWithHighestVote })

    return quoteWithHighestVote
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.quotes)
  }
}
