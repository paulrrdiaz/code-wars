const domainName = url => {
  const regex = /^(?:http[s]?:\/\/)?(?:www.)?([\w-]*)(?:.+)$/;
  return url.match(regex)[1];
};

export { domainName };
