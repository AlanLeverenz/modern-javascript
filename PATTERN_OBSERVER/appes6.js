class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach(function (item) {
      item.call();
    });
  }
}

const click = new EventObserver();

// Event Listeners
// subscribe to milliseconds
document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurMilliseconds);
});

// unsubscribe from milliseconds
document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsubscribe(getCurMilliseconds);
});

// subscribe to seconds
document.querySelector('.sub-s').addEventListener('click', function () {
  click.subscribe(getCurSeconds);
});

// unsubscribe from seconds
document.querySelector('.unsub-s').addEventListener('click', function () {
  click.unsubscribe(getCurSeconds);
});

// fire
document.querySelector('.fire').addEventListener('click', function () {
  click.fire();
});

// Click Handler
const getCurMilliseconds = function () {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurSeconds = function () {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
