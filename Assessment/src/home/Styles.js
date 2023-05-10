import {StyleSheet} from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    paddingHorizontal: 30,
    paddingVertical: 16,
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  searchInput: {
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    marginBottom: 8,
  },
  bioText: {
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 16,
  },
  followers: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  following: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  notFound: {
    fontWeight: 'bold',
  },
  itemSeparator: {
    height: 1,
    backgroundColor: '#ccc',
  },
  listView: {
    marginBottom: 50,
  },
});
