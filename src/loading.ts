function counterGen() {
  let num = 0;
  return {
    num() {
      return num;
    },
    add() {
      num = num + 1;
    },
    sub() {
      if (num - 1 <= 0) {
        num = 0;
      } else {
        num = num - 1;
      }
    },
    reset() {
      num = 0;
    },
  };
}

const counter = counterGen();

export function axiosLoading(params: { type: 'add' | 'sub' | 'reset' }) {
  const evt: any = new Event('__axios_event_loading');

  if (params.type === 'add') {
    counter.add();
  }

  if (params.type === 'sub') {
    counter.sub();
  }

  if (params.type === 'reset') {
    counter.reset();
  }

  evt.response = counter.num();
  window.dispatchEvent(evt);
}
