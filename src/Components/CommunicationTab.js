import React, { useState } from 'react';

const CommunicationTab = ({ isOpen, onClose }) => {
  // Sample contacts data
  const contacts = [
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Bob Smith" },
    { id: 3, name: "Charlie Brown" },
    { id: 4, name: "David Wilson" },
    { id: 5, name: "Eva Green" },
    { id: 6, name: "Frank White" },
    { id: 7, name: "Grace Lee" },
    { id: 8, name: "Hank Miller" },
    { id: 9, name: "Ivy Patel" },
    { id: 10, name: "Jack Turner" },
  ];

  // State to manage selected contact and messages
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Function to handle contact click
  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    setMessages([]); // Clear messages when changing contact
  };

  // Function to go back to the contact list
  const handleBackClick = () => {
    setSelectedContact(null);
  };

  // Function to send a message
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage }]);
      setNewMessage(''); // Clear the input after sending
    }
  };

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>} {/* Overlay for shadow effect */}
      <div className={`fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Conditional Rendering for Chat View */}
          {selectedContact ? (
            <div className="flex flex-col h-full">
              <div className="flex items-center p-4 border-b">
                <i className="bi bi-arrow-left cursor-pointer text-blue-500 text-lg" onClick={handleBackClick} /> {/* Back arrow icon */}
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mx-3">
                  <span className="text-white text-lg">{selectedContact.name.charAt(0)}</span> {/* Profile Picture */}
                </div>
                <span className="text-lg font-bold text-blue-500">{selectedContact.name}</span>
              </div>
              <div className="flex-grow overflow-y-auto p-4">
                {/* Render Chat Messages */}
                {messages.map((message) => (
                  <div key={message.id} className="mb-2 p-2 bg-blue-100 rounded-lg rounded-ee-none w-fit px-4">
                    {message.text}
                  </div>
                ))}
              </div>
              {/* Chat input box */}
              <div className="p-4 border-t ">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-xl focus:outline-none"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)} // Update input value
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} // Send on Enter key
                  />
                  <i className="bi bi-send text-blue-500 text-3xl cursor-pointer ml-2" onClick={handleSendMessage} /> {/* Send icon */}
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-2 p-4">
                <h2 className="text-3xl font-bold text-blue-500">Chat</h2>
                <div className="flex space-x-4">
                  <i className="bi bi-plus-square text-blue-500 text-2xl cursor-pointer hover:text-blue-600" /> {/* Plus icon */}
                  <i className="bi bi-three-dots-vertical text-blue-500 text-2xl cursor-pointer hover:text-blue-600" /> {/* Three-dot icon */}
                </div>
              </div>
              {/* Search bar */}
              <div className="relative mb-4 px-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-10 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 placeholder:text-blue-500"
                />
                <i className="bi bi-search absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-500 text-lg p-4" /> {/* Search icon */}
              </div>
              {/* Contacts List */}
              <div className="flex-grow overflow-y-auto px-5 pb-3">
                {contacts.map((contact, index) => (
                  <div key={contact.id}>
                    <div className="flex items-center py-3 cursor-pointer hover:bg-gray-100" onClick={() => handleContactClick(contact)}>
                      {/* Profile Picture */}
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-lg">{contact.name.charAt(0)}</span> {/* First letter of the name */}
                      </div>
                      <span>{contact.name}</span>
                    </div>
                    {/* Separate div for the divider line */}
                    {index < contacts.length - 1 && (
                      <div className="border-b border-gray-200 w-[420px] ml-12" />
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CommunicationTab;
