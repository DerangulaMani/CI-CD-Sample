public class findSmithAccounts {
		private final List<Contact> contacts;

	public findSmithAccounts() {
		contacts = [select id,firstname,name from Contact];
	}

	public List<Contact> getSmithAccounts() {
		return contacts;
	}
}