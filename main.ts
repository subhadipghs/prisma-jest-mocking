function main() {
  const message: string = "hello world";
  return message;
}

if (require.main === module) {
  console.log(main());
}

export { main };
