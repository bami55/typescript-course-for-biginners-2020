const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

// person.role.push('admin'); // pushはエラー検知されない
// person.role[1] = 10; // エラー検知される

// person.role = [0, 'admin', 'user'];  // エラー検知される

let favoriteActivities: any[];
favoriteActivities = ['Sports', 1];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
