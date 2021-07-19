1. **Maxim Isaev**
1. **My discord: Stierlitz#3149** 
1. **25 years old** **I am ex-progamer, that mean i worked a lot on computer** **Now i want find another job, that's is why i started the course. My plan is simple. Spend all your time on the course and become a good front-end developer.**
1. **I did some projects on WebStorm. Without framework. Just html,css and js.**
1. 
```javascript
createNode(element, attributes) {
      const elem = document.createElement(element);
      Object.assign(elem, attributes);
      return elem;
  }
  createSumAnswer() {
      const divSumAnswer = this.createNode('div', {
          className: 'sumAnswer',
          textContent: `Правильных ответов: ${this.sumAnswer}`,
      });
      document.querySelector('.nameGame').append(divSumAnswer);
  }
``` 